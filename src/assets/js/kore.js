export default [
  {
    label: "tab bar",
    field: "value1",
    type: "innerText",
    targetElement: "#caption"
  },
  {
    label: "pc端banner",
    field: "value2",
    type: "src",
    targetElement: "a[href='#kore-product'] .hidden-xs"
  },
  {
    label: "mobile端banner",
    field: "value3",
    type: "src",
    targetElement: "a[href='#kore-product'] .visible-xs"
  },
  {
    label: "评论文案",
    field: "value4",
    type: "innerText",
    targetElement: ".kore-wysiwyg-content p"
  },
  {
    label: "评论人名字",
    field: "value5",
    type: "innerText",
    targetElement: ".kore-wysiwyg-content p span"
  },
  {
    label: "主标题",
    field: "value6",
    type: "innerText",
    targetElement: ".kore-advantage-block h2"
  },
  {
    label: "副标题",
    field: "value7",
    type: "innerText",
    targetElement: ".kore-advantage-block h5"
  },
  {
    label: "小图1",
    field: "value8",
    type: "src",
    targetElement: ".row .col-xs-3:nth-child(1) img"
  },
  {
    label: "小图1文案",
    field: "value9",
    type: "innerText",
    targetElement: ".row .col-xs-3:nth-child(1) h3"
  },
  {
    label: "小图2",
    field: "value10",
    type: "src",
    targetElement: ".row .col-xs-3:nth-child(2) img"
  },
  {
    label: "小图2文案",
    field: "value11",
    type: "innerText",
    targetElement: ".row .col-xs-3:nth-child(2) h3"
  },
  {
    label: "小图3",
    field: "value12",
    type: "src",
    targetElement: ".row .col-xs-3:nth-child(3) img"
  },
  {
    label: "小图3文案",
    field: "value13",
    type: "innerText",
    targetElement: ".row .col-xs-3:nth-child(3) h3"
  },
  {
    label: "小图4",
    field: "value14",
    type: "src",
    targetElement: ".row .col-xs-3:nth-child(4) img"
  },
  {
    label: "小图4文案",
    field: "value15",
    type: "innerText",
    targetElement: ".row .col-xs-3:nth-child(4) h3"
  },
  {
    label: "产品主图",
    field: "productMainImg",
    type: "src",
    targetElement: "#gallery_output img"
  },
  {
    label: "产品图",
    field: "productImg",
    type: "productImg",
    children: [
      {
        label: "产品图1",
        field: "productImg1",
        type: "src",
        targetElement: "a[rel='img1'] img"
      },
      {
        label: "产品图2",
        field: "productImg2",
        type: "src",
        targetElement: "a[rel='img2'] img"
      },
      {
        label: "产品图3",
        field: "productImg3",
        type: "src",
        targetElement: "a[rel='img3'] img"
      },
      {
        label: "产品图4",
        field: "productImg4",
        type: "src",
        targetElement: "a[rel='img4'] img"
      },
      {
        label: "产品图5",
        field: "productImg5",
        type: "src",
        targetElement: "a[rel='img5'] img"
      },
      {
        label: "产品图6",
        field: "productImg6",
        type: "src",
        targetElement: "a[rel='img6'] img"
      },
      {
        label: "产品图7",
        field: "productImg7",
        type: "src",
        targetElement: "a[rel='img7'] img"
      },
      {
        label: "产品图8",
        field: "productImg8",
        type: "src",
        targetElement: "a[rel='img8'] img"
      },
    ]
  },
  {
    label: "新增一个产品图",
    field: 'value16',
    type: "addProductImg",
  },
  {
    label: "删除一个产品图",
    field: 'value17',
    type: "delProductImg",
  },
  {
    label: "产品名",
    field: 'value18',
    type: "innerText",
    targetElement: ".kore-product-name a"
  },
  {
    label: "产品链接",
    field: 'value19',
    type: "href",
    targetElement: ".kore-product-name a"
  },
  {
    label: "原价",
    field: 'value20',
    type: "innerText",
    targetElement: ".kore-product-compare-price"
  },
  {
    label: "折扣价",
    field: 'value21',
    type: "innerText",
    targetElement: ".kore-product-price"
  },
  {
    label: "折扣文案",
    field: 'value22',
    type: "innerText",
    targetElement: ".kore-percent"
  },
  {
    label: "按钮文案",
    field: 'value23',
    type: "innerText",
    targetElement: ".kore-product-button"
  },
  {
    label: "折扣提示",
    field: 'value24',
    type: "innerText",
    targetElement: ".kore-text-sale"
  },
  {
    label: "文案",
    field: 'value25',
    type: "innerText",
    targetElement: ".kore-text-tip"
  },
  {
    label: "产品动图",
    field: 'value42',
    type: "src",
    targetElement: ".right-content img"
  },
  {
    label: "产品介绍",
    field: 'productDesc',
    type: "productDesc",
    children: [
      {
        label: "产品介绍1",
        field: 'productDesc1',
        type: "innerText",
        targetElement: ".right-content ul > li:nth-child(1)"
      }
    ]
  },
  {
    label: "新增一个产品介绍",
    field: 'addProductDesc',
    type: "addProductDesc",
  },
  {
    label: "删除一个产品介绍",
    field: 'delProductDesc',
    type: "delProductDesc",
  },
  {
    label: "支付图",
    field: 'value26',
    type: "src",
    targetElement: ".kore-payment-image img"
  },
  {
    label: "文案",
    field: 'value27',
    type: "innerText",
    targetElement: ".headline-divider-block h4"
  },
  {
    label: "pc端banner",
    field: 'value28',
    type: "src",
    targetElement: ".row[style='margin-bottom: 30px'] img"
  },
  {
    label: "评论大标题",
    field: 'value29',
    type: "innerText",
    targetElement: ".kore-customer-review h2"
  },
  {
    label: "评论详情",
    field: 'comment',
    type: "comment",
    children: [
      {
        label: "评论1",
        field: "comment1",
        type: "commentItem",
        targetElement: ".kore-customer-review .row .col-xs-12:nth-child(1)",
        children: [
          {
            label: "评论图片",
            field: 'comment1Image',
            type: "src",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(1) img"
          },
          {
            label: "评论标题",
            field: 'comment1Title',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(1) h3"
          },
          {
            label: "评论日期",
            field: 'comment1Date',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(1) h4"
          },
          {
            label: "评论内容",
            field: 'comment1Content',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(1) p"
          },
          {
            label: "评论人名字",
            field: 'comment1Name',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(1) .usr-name"
          },
        ]
      },
      {
        label: "评论2",
        field: "comment2",
        type: "commentItem",
        targetElement: ".kore-customer-review .row .col-xs-12:nth-child(2)",
        children: [
          {
            label: "评论图片",
            field: 'comment2Image',
            type: "src",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(2) img"
          },
          {
            label: "评论标题",
            field: 'comment2Title',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(2) h3"
          },
          {
            label: "评论日期",
            field: 'comment2Date',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(2) h4"
          },
          {
            label: "评论内容",
            field: 'comment2Content',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(2) p"
          },
          {
            label: "评论人名字",
            field: 'comment2Name',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(2) .usr-name"
          },
        ]
      },
      {
        label: "评论3",
        field: "comment3",
        type: "commentItem",
        targetElement: ".kore-customer-review .row .col-xs-12:nth-child(3)",
        children: [
          {
            label: "评论图片",
            field: 'comment3Image',
            type: "src",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(3) img"
          },
          {
            label: "评论标题",
            field: 'comment3Title',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(3) h3"
          },
          {
            label: "评论日期",
            field: 'comment3Date',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(3) h4"
          },
          {
            label: "评论内容",
            field: 'comment3Content',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(3) p"
          },
          {
            label: "评论人名字",
            field: 'comment3Name',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(3) .usr-name"
          },
        ]
      },
      {
        label: "评论4",
        field: "comment4",
        type: "commentItem",
        targetElement: ".kore-customer-review .row .col-xs-12:nth-child(4)",
        children: [
          {
            label: "评论图片",
            field: 'comment4Image',
            type: "src",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(4) img"
          },
          {
            label: "评论标题",
            field: 'comment4Title',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(4) h3"
          },
          {
            label: "评论日期",
            field: 'comment4Date',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(4) h4"
          },
          {
            label: "评论内容",
            field: 'comment4Content',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(4) p"
          },
          {
            label: "评论人名字",
            field: 'comment4Name',
            type: "innerText",
            targetElement: ".kore-customer-review .row .col-xs-12:nth-child(4) .usr-name"
          },
        ]
      },
    ]
  },
  {
    label: "新增一个评论",
    field: 'value30',
    type: "addComment",
  },
  {
    label: "删除一个评论",
    field: 'value31',
    type: "delComment",
  },
  {
    label: "底部背景图",
    field: 'value32',
    type: "background",
    targetElement: ".kore-special-promo"
  },
  {
    label: "底部文案1",
    field: 'value33',
    type: "innerText",
    targetElement: ".kore-special-promo h2 > span:nth-child(1)"
  },
  {
    label: "底部文案2",
    field: 'value34',
    type: "innerText",
    targetElement: ".kore-special-promo h2 > span:nth-child(3)"
  },
  {
    label: "底部文案3",
    field: 'value35',
    type: "innerText",
    targetElement: ".kore-special-promo h3"
  },
  {
    label: "底部文案4",
    field: 'value36',
    type: "innerText",
    targetElement: ".kore-special-promo p"
  },
  {
    label: "底部文案5",
    field: 'value37',
    type: "innerText",
    targetElement: ".kore-special-promo a"
  },
  {
    label: "底部文案6",
    field: 'value38',
    type: "innerText",
    targetElement: ".kore-special-promo ul > li:nth-child(1) strong"
  },
  {
    label: "底部文案7",
    field: 'value39',
    type: "innerText",
    targetElement: ".kore-special-promo ul > li:nth-child(1) span"
  },
  {
    label: "底部文案8",
    field: 'value40',
    type: "innerText",
    targetElement: ".kore-special-promo ul > li:nth-child(2) strong"
  },
  {
    label: "底部文案9",
    field: 'value41',
    type: "innerText",
    targetElement: ".kore-special-promo ul > li:nth-child(2) span"
  },
]