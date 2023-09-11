export interface Risk {
  datenmigration: number;
  zeitplan: number;
  anpassungen: number;
  ressourcen: number;
  abbildungProzesse: number;
  schnittstellen: number;
  anforderungenUnklar: number;
  schulungsaufwand: number;
}

export const under100: Risk = {
  datenmigration: 38,
  zeitplan: 22,
  anpassungen: 17,
  ressourcen: 13.5,
  abbildungProzesse: 13.5,
  schnittstellen: 9.5,
  anforderungenUnklar: 9,
  schulungsaufwand: 7.5,
};

export const under500: Risk = {
  datenmigration: 37.5,
  zeitplan: 27,
  anpassungen: 25,
  ressourcen: 24,
  abbildungProzesse: 20.5,
  schnittstellen: 13,
  anforderungenUnklar: 13,
  schulungsaufwand: 9,
};

export const over500: Risk = {
  datenmigration: 31,
  zeitplan: 32,
  anpassungen: 33,
  ressourcen: 24.5,
  abbildungProzesse: 22,
  schnittstellen: 19.5,
  anforderungenUnklar: 16,
  schulungsaufwand: 9.5,
};
