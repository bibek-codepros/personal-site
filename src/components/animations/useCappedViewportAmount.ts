import { useCallback, useState } from "react";

import { MAX_VIEWPORT_REVEAL_PX } from "./variants";

/**
 * `whileInView`'s `amount` option is a fraction of the target's own
 * height, so a normal-sized element and an unusually tall one need very
 * different fractions to reveal at a sane, reachable point on screen.
 * This measures the element once it mounts and converts `defaultAmount`
 * into a fraction that never requires more than `MAX_VIEWPORT_REVEAL_PX`
 * of visible height — for anything short enough that `defaultAmount`
 * already resolves under that cap, the returned amount is unchanged.
 *
 * The measurement happens in a ref callback (commit phase, before paint),
 * not an effect — the corrected amount is in place before framer-motion's
 * own viewport observer subscribes, so nothing reveals a frame early.
 */
export function useCappedViewportAmount(defaultAmount: number) {
  const [amount, setAmount] = useState(defaultAmount);

  const measureRef = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;
      const height = node.getBoundingClientRect().height;
      if (height > 0) {
        setAmount(Math.min(defaultAmount, MAX_VIEWPORT_REVEAL_PX / height));
      }
    },
    [defaultAmount]
  );

  return { amount, measureRef };
}
