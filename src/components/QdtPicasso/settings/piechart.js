import { Light as defaultTheme } from 'themes';
import merge from 'utils/merge';
import {
  legend, tooltip, pie, labels,
} from './components';
import { itooltip } from './interactions';

const setting = ({ theme: themeProp }) => {
  const theme = merge(defaultTheme, themeProp);  //eslint-disable-line
  return {
    scales: {
      color: { data: { extract: { field: 'qDimensionInfo/0' } }, type: 'color' },
    },
    components: [
      legend,
      tooltip,
      pie,
      labels({
        component: 'pie', selector: 'path', type: 'slice', direction: 'horizontal',
      }),
    ],
    interactions: [itooltip],
  };
};

export default setting;
