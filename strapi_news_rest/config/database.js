module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'C:\Cursos\ReactNative\Noticiapps\data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
