import React from 'react';
import ReactDom from 'react-dom';

import Application from './app/Application';

const {document} = window;

ReactDom.render(<Application />, window.document.getElementById("root"));