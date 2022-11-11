module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
      {
        files: '*.astro, *.scss, "*.ts", "*.tsx"', 
        options: {
          parser: 'astro',
        },
      },
    ]
  };