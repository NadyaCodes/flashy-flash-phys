export type ListObject = {
  [key: string]: [string[], string[], string];
};


export const mnemonics: ListObject = {
  "Bones of the Arm": [["Ultra", "Red", "Hair"], ["Ulna", "Radius", "Humerus"], "ordered"],
  "Bones of the Hand": [["Please", "Make", "Cookies"], ["Phalanges", "Metacarpal bones", "Carpal bones"], "ordered"],
  "Rotator Cuff Muscles": [["Sit", "In", "The", "Seat"], ["Supraspinatus", "Infraspinatus", "Teres Minor", "Subscapularis"], "unordered"],
  "Systems of the Body": [["M", "U", "R", "D", "E", "R", "S", "L", "I", "N", "C"], ["Muscular", "Urinary", "Respiratory", "Digestive", "Endocrine", "Reproductive", "Skeletal", "Lymphatic", "Integumentary", "Nervous", "Cardiovascular"], "unordered"]
}