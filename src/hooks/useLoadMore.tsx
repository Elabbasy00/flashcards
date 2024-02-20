"use client";
import { useState, useCallback, useEffect } from "react";
import { fetcher } from "../utils/fetcher";
import { CardType } from "../types/data-types";
import { useSearchParams } from "next/navigation";

export const useLoadMore = (
  initData: CardType[] = [],
  isPrivate: boolean = false
) => {
  const [more, setMore] = useState<CardType[]>(initData);
  const [isLoading, setIsLoading] = useState(false);
  const params = useSearchParams();
  const allParams = Object.fromEntries(params.entries());
  const search = new URLSearchParams(allParams).toString();

  const pushNew = useCallback((cards: { cards: CardType[] }) => {
    setMore((prevState: any) => [...prevState, ...cards.cards]);
  }, []);

  // Empty data after filter apply
  useEffect(() => {
    if (!initData) setMore([]);
    else setMore(initData);
  }, [initData]);

  const loadMore = async () => {
    if (!more.length) return;

    setIsLoading(true);
    const lastid = more[more.length - 1]._id;
    const response = await fetcher(
      `api/card?lastid=${lastid}&private=${isPrivate}&${search}`
    );
    if (response.ok) {
      const data = await response.json();
      pushNew(data);
      setIsLoading(false);
    }
  };

  return { loadMore, more, isLoading };
};
