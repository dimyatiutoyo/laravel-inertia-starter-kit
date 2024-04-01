export const groupBy = <T, K extends keyof any | null, S extends number | null>(arr: T[], key: (i: T) => K, sortKey?: (i: T) => S) =>
  (sortKey ? arr.sort((a, b) => (sortKey ? sortKey(a)! - sortKey(b)! : 0)) : arr)
    .reduce((groups, item) => {
      const groupKey = key(item);
      const keyString = groupKey === null ? '_null_' : groupKey.toString();
      (groups[keyString] ||= []).push(item);
      return groups;
    }, {} as Record<string | number | symbol, T[]>);
