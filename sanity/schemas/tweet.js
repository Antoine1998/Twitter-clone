import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text in tweet',
      type: 'string',
    }),
    defineField({
      name: 'blockTweet',
      title: 'Block Tweet',
      description: 'ADMIN Controls:Toogle if Tweet is deemed inappropriate',
      type: 'boolean',
      
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'profileImg',
      title: 'Profile image',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Tweet image',
      type: 'string',
    }),
  ] 
})
