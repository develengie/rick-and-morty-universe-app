import { useCallback, useRef } from "react";

export const getLastNodeRef = (
    loading: boolean,
    hasMore: boolean,
    changePageNumber: () => void
): ((node: HTMLTableRowElement) => void) => {
    const observer = useRef<IntersectionObserver>(null);

    const lastNodeRef = useCallback(
        (node: HTMLTableRowElement) => {
            if (loading) {
                return;
            }

            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    changePageNumber();
                }
            });

            if (node) {
                observer.current.observe(node);
            }
        },
        [loading, hasMore]
    );

    return lastNodeRef;
};
