const keystone = require('keystone');
keystone.set('cloudinary config', process.env.CLOUDINARY);
const Types = keystone.Field.Types;

const Film = new keystone.List('Film', {
  autokey: { from: 'name', path: 'key', unique: true, },
  label: 'Films',
});

Film.add({
  name: { type: String, required: true, },
  year: { type: Number, required: false, },
  category: { type: Types.Relationship, ref: 'Category', many: true, },
  image: { type: Types.CloudinaryImage, publicID: 'slug', autoCleanup: true, },
});

Film.track = true;
Film.register();
