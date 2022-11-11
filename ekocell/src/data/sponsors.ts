export interface Sponsor {
  id: number;
  alt: string;
  src: string;
}

export const sponsors: Sponsor[] = [
  { id: 1, alt: "Isocell", src: "./sponsors/isocell.svg" },
  { id: 2, alt: "Trafo", src: "./sponsors/trafo.svg" },
  { id: 3, alt: "IEko", src: "./sponsors/ieko.svg" },
  { id: 4, alt: "Pap Promet", src: "./sponsors/papPromet.svg" },
  { id: 5, alt: "Agepan system", src: "./sponsors/agepan.svg" },
  { id: 6, alt: "Pavatex", src: "./sponsors/pavatex.svg" },
  { id: 7, alt: "Tesarstvo Kregar", src: "./sponsors/kregar.svg" },
  { id: 8, alt: "Egger", src: "./sponsors/egger.svg" },
];
