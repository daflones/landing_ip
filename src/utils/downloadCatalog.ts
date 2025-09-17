export const downloadCatalog = () => {
  const link = document.createElement('a');
  link.href = '/catalogo/INOVAPET.pdf';
  link.download = 'INOVAPET-Catalogo.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
