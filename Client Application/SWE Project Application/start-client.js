const args = [ 'start' ];
const opts = {
  stdio: 'inherit',
  cwd: 'client',
  shell: true
};

const { spawn } = require("child_process");
const client_proc = spawn("npm", args, opts);

client_proc.on('error', (err) => {
  console.error(err.message);
});
