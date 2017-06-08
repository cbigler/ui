import './styles.scss';

let switchId = 0;

export default function Switch(elem) {
  const randomId = ++switchId;

  const switchContainer = document.createElement('div');
  switchContainer.className = 'Switch-container';

  const switchToggle = document.createElement('input');
  switchToggle.className = 'Switch-checkbox';
  switchToggle.type = 'checkbox';
  switchToggle.setAttribute('id', `switch-id-${randomId}`)
  switchContainer.appendChild(switchToggle);

  const switchLabel = document.createElement('label');
  switchLabel.className = 'Switch-handle';
  switchLabel.setAttribute('for', `switch-id-${randomId}`)
  switchContainer.appendChild(switchLabel);

  elem.appendChild(switchContainer);

  return props => {
    switchToggle.checked = props.enabled;
    switchToggle.onchange = props.onChange;
  }
}
