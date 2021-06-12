export const getPageNumber = (page:number):void => {
  const pageNumber = `<div>Page # ${page}<div>`;
  document.getElementsByClassName('pagination')[0].innerHTML = pageNumber;
};
