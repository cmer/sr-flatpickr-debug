import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import ExampleController from "./example_controller"
application.register('example', ExampleController)

import FoobarController from "./foobar_controller"
application.register('foobar', FoobarController)

import Flatpickr from "stimulus-flatpickr"
require("flatpickr/dist/flatpickr.css")
application.register('flatpickr', Flatpickr)

