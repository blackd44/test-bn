import { Request } from "express";

export function sortFields(str?: string) {
  if (!str) return [];

  const fields = str
    ?.split?.(",")
    ?.map?.((word) => {
      word = word?.trim?.();
      if (!word) return [];

      const [sign, ...f] = word;
      if (!["-", "+"].includes(sign)) {
        return [[sign, ...f].join(""), 1];
      } else if (["+"].includes(sign)) {
        return [f.join(""), 1];
      } else {
        return [f.join(""), -1];
      }
    })
    ?.filter?.((word) => word?.length == 2);

  return Object.fromEntries(fields);
}

export function Paginators(req: Request) {
  //  #swagger.parameters['start'] = { in: 'query', type: 'number' }
  //  #swagger.parameters['size'] = { in: 'query', type: 'number' }
  //  #swagger.parameters['sort_by'] = { in: 'query', type: 'string' }
  const { start, size, sort_by } = req.query;

  const skip = Number(start) || 0;
  const limit = Number(size) || 10;
  const sorts = sortFields(`${sort_by || ""}`);

  return { start, size, sort_by, skip, limit, sorts };
}
