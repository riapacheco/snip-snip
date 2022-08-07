#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';



/* -------------------------------- VARIABLES ------------------------------- */
// SLEEP
const sleepHalfSec = (ms = 500) => new Promise((r) => setTimeout(r, ms));
const sleep1sec = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sleep2sec = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// COLORS
const colorHex = {
  orange: '#FFC400',
  white: '#FFFFFF',
  blue: '#00B8D9',
  blueLight: '#79E2F2',
  bloodOrange: '#FF9576',
};
// OPTION STRINGS
const option = {
  buttonOverride: `Override Button colors with class syntax`,
  fontImport: `Google fonts import <links> to copy/paste into <head> element`,
  materialIconsImport: `Material Icons import <link> to copy/paste into <head> element`,
  pipeDirectivesOptions: `Useful Angular Pipes and Directives`,
};


/* ----------------------------- WELCOME PROMPT ----------------------------- */
async function helloScreen() {
  const helloTitle = chalkAnimation.rainbow(
    `@RIAPACHECO/SNIPS CLI-TOOL`
  );
  await sleep1sec();
  helloTitle.stop();
}

/* -------------------------------------------------------------------------- */
/*                            MULTIPLE CHOICE LIST                            */
/* -------------------------------------------------------------------------- */
async function chooseOption() {
  const potentialOptions = await inquirer.prompt({
    name: 'options_list',
    type: 'list',
    message: `  
    What would you like help with today?

    `,
    choices: [
      `${option.fontImport}`,
      `${option.materialIconsImport}`,
      `${option.buttonOverride}`,
      `${option.pipeDirectivesOptions}`
    ],
  });

  /* --------------------------------- ANSWERS -------------------------------- */
  switch (potentialOptions.options_list) {

    /* ------------------------------ BUTTON ANSWER ----------------------------- */
    case option.buttonOverride:
      buttonOverrideDoc();
      break;

    case option.materialIconsImport:
      showMaterialIconsLink();
      break;

    case option.fontImport:
      chooseFontName();
      break;

    case option.pipeDirectivesOptions:
      pipeSnippetOptions();
      break;
  }
}

async function buttonOverrideDoc() {
  console.log(`

    ${chalk.greenBright(`⬇ Override in your Main Stylesheet ⬇ `)}

    ${chalk.grey(`// Primary Button Color`)}
    ${chalk.hex(colorHex.orange)(`.btn.primary`)} ${chalk.hex(colorHex.white)(`{`)}
      ${chalk.hex(colorHex.blue)(`background-color: ${chalk.hex(colorHex.bloodOrange)(`<new_color_value>`)};      ${chalk.grey(`// background`)}`)}
      ${chalk.hex(colorHex.blue)(`color: ${chalk.hex(colorHex.bloodOrange)(`<new_color_value>`)};                 ${chalk.grey(`// text color`)}`)}
    ${chalk.white(`}`)}

    ${chalk.grey(`// Secondary Button Color`)}
    ${chalk.hex(colorHex.orange)(`.btn.secondary`)} ${chalk.hex(colorHex.white)(`{`)}
      ${chalk.hex(colorHex.blue)(`background-color: ${chalk.hex(colorHex.bloodOrange)(`<new_color_value>`)};      ${chalk.grey(`// background`)}`)}
      ${chalk.hex(colorHex.blue)(`color: ${chalk.hex(colorHex.bloodOrange)(`<new_color_value>`)};                 ${chalk.grey(`// text color`)}`)}
    ${chalk.white(`}`)}

    ${chalk.grey(`// Accent Button Color`)}
    ${chalk.hex(colorHex.orange)(`.btn.accent`)} ${chalk.hex(colorHex.white)(`{`)}
      ${chalk.hex(colorHex.blue)(`background-color: ${chalk.hex(colorHex.bloodOrange)(`<new_color_value>`)};      ${chalk.grey(`// background`)}`)}
      ${chalk.hex(colorHex.blue)(`color: ${chalk.hex(colorHex.bloodOrange)(`<new_color_value>`)};                 ${chalk.grey(`// text color`)}`)}
    ${chalk.white(`}`)}

  `);
}
async function chooseFontName() {
  const fontOptions = await inquirer.prompt({
    name: 'font_options',
    type: 'list',
    message: `Which font do you need <links> for?`,
    choices: [
      `Inter`,
      `Roboto Flex`,
      `Public Sans`,
      `Open Sans`,
      `Fira Code`
    ],
  });

  const interLink = `"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"`;
  const robotoFlexLink = `"https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap"`;
  const publicSansLink = `"https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"`;
  const openSansLink = `"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"`;
  const firaCodeLink = `"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"`;

  switch (fontOptions.font_options) {
    case `Inter`:
      console.log(`

      ${chalk.greenBright(`⬇ Add following inside the <head> element of your index.html file ⬇ `)}

      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.googleapis.com"')}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.gstatic.com"')} ${chalk.hex(colorHex.blueLight)(`crossorigin`)}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)(`${interLink}`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"stylesheet"')}>
      `);
      break;
    case `Roboto Flex`:
      console.log(`

      ${chalk.greenBright(`⬇ Add following inside the <head> element of your index.html file ⬇ `)}

      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.googleapis.com"')}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.gstatic.com"')} ${chalk.hex(colorHex.blueLight)(`crossorigin`)}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)(`${robotoFlexLink}`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"stylesheet"')}>
      `);
      break;
    case `Public Sans`:
      console.log(`

      ${chalk.greenBright(`⬇ Add following inside the <head> element of your index.html file ⬇ `)}

      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.googleapis.com"')}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.gstatic.com"')} ${chalk.hex(colorHex.blueLight)(`crossorigin`)}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)(`${publicSansLink}`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"stylesheet"')}>
      `);
      break;
    case `Open Sans`:
      console.log(`

      ${chalk.greenBright(`⬇ Add following inside the <head> element of your index.html file ⬇ `)}

      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.googleapis.com"')}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.gstatic.com"')} ${chalk.hex(colorHex.blueLight)(`crossorigin`)}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)(`${openSansLink}`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"stylesheet"')}>
      `);
      break;
    case `Fira Code`:
      console.log(`

      ${chalk.greenBright(`⬇ Add following inside the <head> element of your index.html file ⬇ `)}

      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.googleapis.com"')}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"preconnect"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)('"https://fonts.gstatic.com"')} ${chalk.hex(colorHex.blueLight)(`crossorigin`)}>
      <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)(`${firaCodeLink}`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"stylesheet"')}>
      `);
      break;
  }
}
async function showMaterialIconsLink() {
  const iconsLink = `"https://fonts.googleapis.com/icon?family=Material+Icons"`;
  console.log(`
  
    ${chalk.greenBright(`⬇ Add following inside the <head> element of your index.html file ⬇ `)}

    <${chalk.blueBright(`link`)} ${chalk.hex(colorHex.blueLight)(`rel=`)}${chalk.hex(colorHex.bloodOrange)('"stylesheet"')} ${chalk.hex(colorHex.blueLight)(`href=`)}${chalk.hex(colorHex.bloodOrange)(iconsLink)}>
  `);
}
async function pipeSnippetOptions() {
  const filterAllString = `${chalk.cyanBright('Pipe')}: Filter All`;
  const outsideClickString = `${chalk.cyanBright('Directive')}: Outside Click`;
  
  const differentPipes = await inquirer.prompt({
    name: 'different_pipes',
    type: 'list',
    message: `Select a pipe`,
    choices: [
      `${filterAllString}`,
      `${outsideClickString}`
    ],
  })

  switch(differentPipes.different_pipes) {
    case filterAllString:
      console.log(`
        ${chalk.greenBright(`
          export class FilterAllPipe implements PipeTransform {

            transform(value: any, searchText: any): any {
              if (!searchText) { return value; }
              return value.filter((data: any) => this.matchValue(data, searchText));
            }
          
            matchValue(data: any, value: any) {
              return Object.keys(data).map((key) => {
                return new RegExp(value, 'gi').test(data[key]);
              }).some(result => result);
            }
          }
        `)}
      `);
      break;
    case outsideClickString:
      console.log(`
        ${chalk.greenBright(`
          import {
            Directive,
            ElementRef,
            EventEmitter,
            HostListener,
            OnInit,
            Output,
          } from '@angular/core';
          
          @Directive({
            selector: '[outsideClick]',
          })
          export class OutsideClickDirective {
            @Output() outsideClick = new EventEmitter();
          
            constructor(private elementRef: ElementRef) {}
          
            @HostListener('document:click', ['$event', '$event.target'])
            public onClick(event: MouseEvent, targetElement: HTMLElement): void {
              if (!targetElement) {
                return;
              }
              const clickedInside = this.elementRef.nativeElement.contains(targetElement);
              if (!clickedInside) {
                this.outsideClick.emit(event);
              }
            }
          }
        `)}
      `);
      break;
  }
}

await helloScreen();
await chooseOption();