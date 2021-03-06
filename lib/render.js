'use strict';

const yo = require('yo-yo');
const button = require('dat-button');
const encoding = require('dat-encoding');
const bytes = require('bytes');
const header = require('./header');
const css = require('yo-css');

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  heading: {
    backgroundColor: 'lightgray'
  }
};

module.exports = (props) => yo`
  <div>
    ${header({
      create: props.create,
      download: props.download
    })}
    <table style=${css(style.table)}>
      <thead style=${css(style.heading)}>
        <td></td>
        <td>Link</td>
        <td>Owner/Rights</td>
        <td>Download</td>
        <td>Network</td>
        <td>Size</td>
        <td>Actions</td>
      </thead>
      ${Array.from(props.dats.values()).map(dat => yo`
        <tr>
          ${'TODO determine arrow direction' && ''}
          <td>${dat.downloaded
            ? '↑'
            : '↓'}</td>
          <td>
            #${encoding.encode(dat.key)}
          </td>
          <td>${dat.owner
            ? 'Read & Write'
            : 'Read only'}</td>
          ${'TODO download state' && ''}
          <td>100%</td>
          <td>${dat.swarm.connections}</td>
          <td>${bytes(dat.content && dat.content.bytes) || '?'}</td>
          <td>
            ${button({
              text: 'Open',
              click: () => props.open(dat)
            })}
            ${button({
              text: 'Share',
              click: () => props.share(dat)
            })}
            ${button({
              text: 'Delete',
              click: () => props.delete(dat)
            })}
          </td>
        </tr>    
      `)}
    </table>
  </div>
`;

