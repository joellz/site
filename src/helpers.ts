
export const openInNewTab = (href: string) => {
  if(typeof window !== 'undefined'){
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href
    }).click()
  }
}