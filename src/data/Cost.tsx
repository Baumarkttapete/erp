interface Cost {
  gesamt: {
    gesamt: number;
  };
  groesse: {
    bis100Mitarbeiter: number;
    bis500Mitarbeiter: number;
    ab500Mitarbeiter: number;
  };
  branche: {
    industrie: number;
    handel: number;
    dienstleistungen: number;
  };
  region: {
    d: number;
    a: number;
    ch: number;
  };
}

export const softwareData: Cost = {
  gesamt: {
    gesamt: 2434,
  },
  groesse: {
    bis100Mitarbeiter: 2098,
    bis500Mitarbeiter: 2324,
    ab500Mitarbeiter: 2592,
  },
  branche: {
    industrie: 2641,
    handel: 2255,
    dienstleistungen: 2097,
  },
  region: {
    d: 2200,
    a: 2525,
    ch: 3589,
  },
};

export const dienstleistungData: Cost = {
  gesamt: {
    gesamt: 1923,
  },
  groesse: {
    bis100Mitarbeiter: 1991,
    bis500Mitarbeiter: 2020,
    ab500Mitarbeiter: 1824,
  },
  branche: {
    industrie: 2106,
    handel: 1798,
    dienstleistungen: 1573,
  },
  region: {
    d: 1766,
    a: 1857,
    ch: 2800,
  },
};

export const hardwareData: Cost = {
  gesamt: {
    gesamt: 1560,
  },
  groesse: {
    bis100Mitarbeiter: 1224,
    bis500Mitarbeiter: 1430,
    ab500Mitarbeiter: 1726,
  },
  branche: {
    industrie: 1463,
    handel: 1778,
    dienstleistungen: 1579,
  },
  region: {
    d: 1442,
    a: 1441,
    ch: 2626,
  },
};

export const nData: Cost = {
  gesamt: {
    gesamt: 6409,
  },
  groesse: {
    bis100Mitarbeiter: 861,
    bis500Mitarbeiter: 2190,
    ab500Mitarbeiter: 3358,
  },
  branche: {
    industrie: 3555,
    handel: 1374,
    dienstleistungen: 1480,
  },
  region: {
    d: 4850,
    a: 533,
    ch: 1026,
  },
};
