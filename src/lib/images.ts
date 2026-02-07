const LOCAL_IMAGES = [
  "shirt1.jpg",
  "shirt2.jpg",
  "shirt3.jpg",
  "pants1.jpg",
  "pants2.jpg",
  "pants3.jpg",
];

export function getLocalImage(firestoreUrl: string): string {
  if (firestoreUrl.startsWith("/images/")) return firestoreUrl;

  for (const img of LOCAL_IMAGES) {
    const name = img.replace(".jpg", "");
    if (firestoreUrl.toLowerCase().includes(name)) {
      return `/images/${img}`;
    }
  }

  return `/images/${LOCAL_IMAGES[0]}`;
}
