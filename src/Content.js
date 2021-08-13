/** @jsx jsx */
import { jsx } from 'theme-ui';
import Gun from 'gun/gun';
import { useEffect, useState } from 'react';
const gun = Gun([
  'http://localhost:8765/gun',
  'https://mvp-gun.herokuapp.com/gun',
  'https://e2eec.herokuapp.com/gun'
]);
const vertexEmails = gun.get('VXREMAILS');

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function Content() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let newUser = {};
    let newUserId = uuidv4();
    newUser[newUserId] = e.target.children[0].value;
    vertexEmails.put(newUser);
    setSubmitted(true);
  }

  // function logEmails () {
  //   vertexEmails.map(function(ack){
  //     console.log(ack)
  //   })
  // }

  return (
    <div
      sx={{
        maxWidth: '1200px',
        p: 4,
        margin: 'auto',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <img
        sx={{ width: '100%' }}
        src="data:image/png;base64,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"
      />
      <p>Please enter email to be notified about the beta</p>
      {!submitted ? (
        <form
          onSubmit={e => handleSubmit(e)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            '*': {
              fontSize: 0,
              border: 'none',
              fontFamily: 'body',
              outline: 'none',
              p: 1,
              px: 2
            }
          }}
        >
          <input type="email" />
          <button sx={{ bg: 'highlight', cursor: 'pointer' }}>Submit</button>
        </form>
      ) : (
        <h1>Thanks</h1>
      )}
      {/* <button onClick={logEmails}>Log</button> */}
    </div>
  );
}
