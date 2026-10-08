import {defineType, defineField} from 'sanity'

export const emailCampaign = defineType({

    name: 'emailCampaign',

    title: 'Email Campaign',

    type: 'document',

    fields: [

        defineField({
            name: 'subject',
            type: 'string'
        }),

        defineField({
            name: 'preheader',
            type: 'string'
        }),

        defineField({
            name: 'headline',
            type: 'string'
        }),

        defineField({
            name: 'body',
            type: 'text'
        }),

        defineField({
            name: 'heroImage',
            type: 'image'
        }),

        defineField({
            name: 'feature1Image',
            type: 'image'
        }),

        defineField({
            name: 'feature2Image',
            type: 'image'
        }),

        defineField({
            name: 'feature3Image',
            type: 'image'
        }),

      defineField({
    name: 'cta1Label',
    title: 'CTA 1 Label',
    type: 'string'
}),

defineField({
    name: 'cta1Url',
    title: 'CTA 1 URL',
    type: 'url'
}),

defineField({
    name: 'cta2Label',
    title: 'CTA 2 Label',
    type: 'string'
}),

defineField({
    name: 'cta2Url',
    title: 'CTA 2 URL',
    type: 'url'
}),

defineField({
    name: 'cta3Label',
    title: 'CTA 3 Label',
    type: 'string'
}),

defineField({
    name: 'cta3Url',
    title: 'CTA 3 URL',
    type: 'url'
}),

    ],

})