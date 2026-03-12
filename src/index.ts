import Button from "./components/Button";
import Collapse, { CollapseItem } from "./components/Collapse";
import Alert from "./components/Alert";
import Select from "./components/Select";
import Switch from "./components/Switch";
import Form, { FormItem } from "./components/Form";
import Message, { createMessage, closeAll as closeMessageAll } from "./components/Message";
import Dropdown from "./components/Dropdown";
import Icon from "./components/Icon";
import Input from "./components/Input";
import Tooltip from "./components/Tooltip";
import type { App } from "vue";

import './styles/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const components = [
  Button,
  Collapse,
  Alert,
  Select,
  Switch,
  Form,
  Message,
  Dropdown,
  Icon,
  Input,
  Tooltip
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name!, component)
  })
}

export {
  Button,
  Collapse,
  Alert,
  Select,
  Switch,
  Form,
  Message,
  Dropdown,
  Icon,
  Input,
  Tooltip,
  CollapseItem,
  FormItem,
  createMessage,
  closeMessageAll
}

export default {
  install
}
