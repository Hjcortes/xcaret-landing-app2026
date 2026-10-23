export const assetUrl = (path) => {
  const baseUrl = import.meta.env.BASE_URL; // Puede ser "/" o "/xcaret-landing-app2026/"
  
  // Quitamos la barra del inicio del 'path' si es que el usuario la puso
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Nos aseguramos de que baseUrl termine con barra y las unimos
  const safeBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${safeBase}${cleanPath}`;
};
