export const products = [
  { id: "1", name: "Product A", description: "Description of Product A" },
  { id: "2", name: "Product B", description: "Description of Product B" },
  { id: "3", name: "Product C", description: "Description of Product C" },
];

export const toSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Menghapus karakter khusus
    .replace(/\s+/g, "-") // Mengganti spasi dengan -
    .replace(/--+/g, "-"); // Menghindari dua tanda - berurutan
};

export const slugToName = (slug: string) => {
  return slug
    .replace(/-/g, ' ') // Ganti "-" dengan spasi
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Kapitalisasi setiap kata
};