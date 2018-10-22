const Router = require('koa-router');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'client/dist/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

const router = new Router();

router.post('/upload', upload.single('image'), async (ctx, next) => {
  if (ctx.req.file) {
    ctx.res.json({
      imageUrl: `uploads/${ctx.req.file.filename}`
    });
  } else {
    ctx.status('409').json('No Files to Upload.');
  }
});

module.exports = router;
