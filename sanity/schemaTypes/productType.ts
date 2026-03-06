import { defineField, defineType } from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Appliance Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Washing Machines', value: 'Washing Machines' },
                    { title: 'Washer Dryers', value: 'Washer Dryers' },
                    { title: 'Tumble Dryers', value: 'Tumble Dryers' },
                    { title: 'Fridge Freezers', value: 'Fridge Freezers' },
                    { title: 'Dishwashers', value: 'Dishwashers' },
                ],
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Price ($)',
            type: 'number',
            validation: Rule => Rule.required().min(0),
        }),
        defineField({
            name: 'brand',
            title: 'Brand',
            type: 'string',
            description: 'e.g., Bosch, Samsung, Beko',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'features',
            title: 'Key Features (Bullet Points)',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'energyRating',
            title: 'Energy Rating',
            type: 'string',
        }),
        defineField({
            name: 'capacity',
            title: 'Capacity',
            type: 'string',
        }),
        defineField({
            name: 'spinSpeed',
            title: 'Spin Speed',
            type: 'string',
        }),
        defineField({
            name: 'colour',
            title: 'Colour',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
            media: 'image',
        },
        prepare(selection) {
            const { title, category, media } = selection
            return {
                title: title,
                subtitle: category,
                media: media,
            }
        },
    },
})
