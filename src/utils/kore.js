export function generateGalleryHTML(images) {
  const galleryOutput = `<div id="gallery_output"><img src="${images[0]}" class="img-responsive" id="img1" /></div>`;
  const imageItems = [];
  images.forEach((item, index) => {
    imageItems.push(
      `<a ${index ? "" : 'class="on"'} rel="img${index + 1
      }"><img src="${item}" class="img-responsive" /></a>`
    );
  });
  const imageStr = imageItems.join(" ");
  const result = `<div id="gallery"> ${galleryOutput} <div id="gallery_nav"> ${imageStr} </div> </div>`;
  return result;
};

export function generateProductImageOptions(num) {
  return {
    label: `产品图${num}`,
    field: `productImg${num}`,
    type: "src",
    targetElement: `a[rel='img${num}'] img`
  }
}
export function generateProductImageHTML(num, src = "https://cdn.shopifycdn.net/s/files/1/0559/5224/4936/files/1_1_217bf3da-ca86-4809-a1a5-ab56c7d898ec.webp?v=1709883189") {
  const htmlString = `<a rel="img${num}"
  ><img
    src=${src}
    class="img-responsive"
/></a>`
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const nodes = doc.body.firstChild;
  document.querySelector('#gallery_nav').appendChild(nodes);
}
export function generateCommentOptions(num) {
  return {
    label: `评论${num}`,
    field: `comment${num}`,
    type: "commentItem",
    targetElement: `.kore-customer-review .row .col-xs-12:nth-child(${num})`,
    children: [
      {
        label: "评论图片",
        field: `comment${num}Image`,
        type: "src",
        targetElement: `.kore-customer-review .row .col-xs-12:nth-child(${num}) img`
      },
      {
        label: "评论标题",
        field: `comment${num}Title`,
        type: "innerText",
        targetElement: `.kore-customer-review .row .col-xs-12:nth-child(${num}) h3`
      },
      {
        label: "评论日期",
        field: `comment${num}Date`,
        type: "innerText",
        targetElement: `.kore-customer-review .row .col-xs-12:nth-child(${num}) h4`
      },
      {
        label: "评论内容",
        field: `comment${num}Content`,
        type: "innerText",
        targetElement: `.kore-customer-review .row .col-xs-12:nth-child(${num}) p`
      },
      {
        label: "评论人名字",
        field: `comment${num}Name`,
        type: "innerText",
        targetElement: `.kore-customer-review .row .col-xs-12:nth-child(${num}) .usr-name`
      }
    ]
  }
}
export function generateCommentHTML(
  num,
  src = "https://cdn.shopify.com/s/files/1/0559/5224/4936/files/4_91d0a2d4-a85a-49c1-8fb9-d3231e21f8ec.webp?v=1709883417",
  title = "GOOD LADDER STEP BRACES",
  date = "JAN 04, 2023",
  content = "content",
  name = "Claudia H."
) {
  const htmlString = `<div class="col-xs-12 col-sm-3">
  <div class="kore-review-item">
    <img
      style="width: 100%"
      class="img-responsive center-block"
      src=${src}
    />
    <div class="kore-review-item-content">
      <h3>${title}</h3>
      <h4>${date}</h4>
      <div class="kore-review-star">
        <img
          class="img-responsive"
          src="https://cdn.shopifycdn.net/s/files/1/0225/4818/5162/files/stars_5blk.png?v=1618388545"
        />
      </div>
      <p>
        ${content}
      </p>
      <p class="usr-name">${name}</p>
    </div>
  </div>
</div>`
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const nodes = doc.body.firstChild;
  document.querySelector('.kore-customer-review .row').appendChild(nodes);
}
export function generateDescOptions(num) {
  return {
    label: `产品介绍${num}`,
    field: `productDesc${num}`,
    type: "innerText",
    targetElement: `.right-content ul > li:nth-child(${num})`
  }
}
export function generateDescHTML(num, text = "xxxx:xxxx") {
  const htmlString = `<li>${text}</li>`
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const nodes = doc.body.firstChild;
  document.querySelector('.right-content ul').appendChild(nodes);
}