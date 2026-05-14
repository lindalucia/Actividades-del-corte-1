export interface Eraslist {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  text: string;
  show: boolean;
}

export const erasData: Eraslist[] = [
  {
    id: "1",
    title: "Arte Antiguo",
    subtitle: "Desde las primeras civilizaciones hasta la caída de Roma.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Reconstruction_of_the_mosaic_depiction_of_the_Battle_of_Issus_after_a_painting_by_Apelles_found_in_the_House_of_the_Faun_at_Pompeii_%28published_1893%29.jpg",
    text: "El arte antiguo abarca las manifestaciones artísticas de las grandes civilizaciones como Mesopotamia, Egipto, Grecia y Roma. Se caracteriza por su enfoque en la mitología, la religión y la glorificación de los gobernantes.",
    show: false,
  },
  {
    id: "2",
    title: "Arte Medieval",
    subtitle: "Enfocado en la religión y el simbolismo.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Giotjud.jpg",
    text: "Dominado por la Iglesia Cristiana, su principal función era didáctica y religiosa, utilizando el simbolismo para transmitir historias bíblicas. Estilos como el Románico y el Gótico se manifestaron en la arquitectura de catedrales.",
    show: false,
  },
  {
    id: "3",
    title: "Renacimiento",
    subtitle: "Redescubrimiento de la cultura clásica y el humanismo.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1920px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    text: "Fue un movimiento cultural que marcó el renacer de los valores de la Antigüedad clásica, poniendo al ser humano en el centro del universo. Artistas como Leonardo, Miguel Ángel y Rafael buscaron la perfección técnica.",
    show: false,
  },
  {
    id: "4",
    title: "Barroco",
    subtitle: "Dinamismo, emoción y dramatismo.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Caravaggio_%E2%80%94_The_Calling_of_Saint_Matthew.jpg/330px-Caravaggio_%E2%80%94_The_Calling_of_Saint_Matthew.jpg",
    text: "Se caracterizó por su dramatismo, su carga emocional y su sentido del movimiento. Fue el arte de la Contrarreforma, utilizado por la Iglesia para asombrar y conmover a los fieles con obras de gran intensidad.",
    show: false,
  },
  {
    id: "5",
    title: "Arte Moderno",
    subtitle: "Ruptura con la tradición, vanguardias.",
    image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbGVzLWRlbW9pc2VsbGVzLWQtYXZpZ25vbi5qcGciLCJyZXNpemUsODAwIl19.uBfFLV7ky8GKwx5MrZRIONeGSA_nq9DmN6orUGuNM-E.jpg",
    text: "Representa una ruptura radical con la tradición académica. Surgieron las vanguardias como el Impresionismo, Cubismo y Surrealismo, que desafiaron las nociones de realidad, forma y color, centradas en la subjetividad del artista.",
    show: false,
  },
  {
    id: "6",
    title: "Arte Contemporáneo",
    subtitle: "Globalización, tecnología y diversidad de estilos.",
    image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNWU5MzMxMzBlNTA2Zi5qcGciLCJyZXNpemUsMjAwMCwyMDAwIl19.t6cAxfQys3zxOf2vTsuFzzR90Lb4X2dOR06qkAmYL0g.jpg",
    text: "Se caracteriza por una total diversidad de estilos y medios: instalación, videoarte, arte digital, etc. Es global, multicultural y a menudo cuestiona la sociedad, la identidad, la política y la propia definición de qué es el arte.",
    show: false,
  },
];