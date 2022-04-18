window.addEventListener('load', function () {
  let observer = new MutationObserver((mutations, obs) => {
  let btns = document.querySelector('[class*="btns"]')
    if (btns) {
      btns.insertAdjacentHTML('beforeend',`<div style="margin-left: 10px;display: flex;align-items: center;"><label id="qo7XKNNheE"><input id="Mq7XWe3k7P" type="checkbox" onclick="if(this.checked) document.head.insertAdjacentHTML('beforeend', \`<style id='hf36g4o44ski2jegdt79'>[class*='Value'],[data-key='runcode-result-content']{max-height:none;}</style>\`);else document.querySelector('#hf36g4o44ski2jegdt79').remove();"/><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><style>.cls-1{stroke:#f2f3f4;stroke-miterlimit:10;stroke-width:2px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="11" cy="11" r="10"/></g></g></svg></label></div>`);
      obs.disconnect();
      return;
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
});