interface validAttributeFn {
  attr: string;
  val: string | number | undefined;
  valDef: string | number;
}

export const validAtribute = (attributes: validAttributeFn[]) => {
  let attri: string = "";
  attributes.forEach(({ attr, val, valDef }) => {
    val !== undefined ? attri += `${attr}: ${val};` : null
  });
  return attri;
};