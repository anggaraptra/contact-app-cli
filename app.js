// mengambil argument dari command line
const yargs = require('yargs');
const { simpanContact, listContact, detailContact, deleteContact } = require('./contacts');
const { argv } = require('process');

yargs
  .command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
      nama: {
        describe: 'Nama lengkap',
        demandOptions: true,
        type: 'string',
      },
      email: {
        describe: 'Email',
        demandOptions: false,
        type: 'string',
      },
      hp: {
        describe: 'No Handphone',
        demandOptions: true,
        type: 'string',
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.email, argv.hp);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama dan no hp contact
yargs.command({
  command: 'list',
  describe: 'Menampilkan semua nama dan no hp contact',
  handler() {
    listContact();
  },
});

// menampilkan detail sebuah contact
yargs.command({
  command: 'detail',
  describe: 'Menampilkan detail sebuah contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOptions: true,
      type: 'string',
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: 'delete',
  describe: 'Menghapus sebuah contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOptions: true,
      type: 'string',
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();

// object destructuring
// const { tulisPertanyaan, simpanContact } = require('./contacts');

// const main = async () => {
//   const nama = await tulisPertanyaan('Masukan nama anda : ');
//   const email = await tulisPertanyaan('Masukan email anda : ');
//   const hp = await tulisPertanyaan('Masukan no hp anda : ');

//   simpanContact(nama, email, hp);
// };

// main();
