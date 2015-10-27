import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import './ajax_setup';


let appElement = $('.app');

let router = new Router(appElement);
router.start();