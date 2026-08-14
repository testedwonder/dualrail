from __future__ import annotations

from collections import deque
from collections.abc import Mapping, Sequence


DEPENDENCIES: dict[str, tuple[str, ...]] = {
    "coupler-frequency": ("swap-pulse", "wait-time"),
    "swap-pulse": ("cz-calibration",),
    "wait-time": ("cz-calibration",),
    "cz-calibration": ("gate-benchmark",),
    "gate-benchmark": (),
}


def invalidate_descendants(
    changed: str, dependencies: Mapping[str, Sequence[str]]
) -> list[str]:
    stale: list[str] = []
    visited = {changed}
    pending = deque(sorted(dependencies.get(changed, ())))

    while pending:
        current = pending.popleft()
        if current in visited:
            continue
        visited.add(current)
        stale.append(current)
        pending.extend(sorted(dependencies.get(current, ())))

    return stale


def main() -> int:
    stale = invalidate_descendants("coupler-frequency", DEPENDENCIES)
    expected = [
        "swap-pulse",
        "wait-time",
        "cz-calibration",
        "gate-benchmark",
    ]
    assert stale == expected
    assert invalidate_descendants("cz-calibration", DEPENDENCIES) == [
        "gate-benchmark"
    ]
    assert invalidate_descendants("gate-benchmark", DEPENDENCIES) == []

    print("changed: coupler-frequency")
    print("stale: " + ", ".join(stale))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())