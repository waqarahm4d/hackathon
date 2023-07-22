export const product = {
    name: "product",
    type: "document",
    title: "Products",
    fields: [
        {
            name: "title",
            title: "Product Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input:any) => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        },
        {
            name: "description",
            title: "Product Description",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "image",
            title: "Product Image",
            type: "array",
            of: [
                {
                    type: "image",
                    fields: [
                        {
                            name:"alt",
                            type: "text",
                            title: "Alt Text"
                        }
                    ]
                }
            ]
        },
        {
            name: "category",
            title: "Product Categories",
            type: "reference",
            to:[
                {
                    type: "category",
                }
            ]
            
        },
        {
            name: "price",
            title: "Product Price",
            type: "number",
        },
        {
            name: "size",
            title: "Product Size",
            type: "array",
            of:[
                {
                    type: "string"
                }
            ]
        }
    ]
}