“QuickPay Payment Wizard”
=========================

**Created: 07/26/2020  
By: Rufat Mammadli**

* * *

Contents
--------

1.  [Components structure](#componentsstructure)
2.  [Header component](#headercomponent)
3.  [Wizard component](#wizardcomponent)
4.  [Footer component](#footercomponent)
5.  [CSS structure](#cssstructure)

* * *

### **A) Components structure** - [top](#componentsstructure)

In App.js, we have added the wizard's required main components. As you can see in the preview image, There are three components; "Header", "Wizard", and "Footer". "Header" and "Footer" components are optional. "Wizard" component can work without them, independently.

[![Component structure](https://github.com/rufat/payframe-masterpay/blob/master/documentation/assets/images/componentstructure.png)](assets/images/componentstructure.png)

(src/App.js)

* * *

### **B) Header component** - [top](#headercomponent)

The "Header" component requires only "langs" and "onChange" props.

![Languages constant](https://github.com/rufat/payframe-masterpay/blob/master/documentation/assets/images/languagesconstants.png)

The "langs" prop should be an Array<Object>. You can easily change the constant languages with API data.

"onChange" function returns "id" of the language you provided.

![Language change function](https://github.com/rufat/payframe-masterpay/blob/master/documentation/assets/images/langchangefunction.png)

* * *

### **C) Wizard component** - [top](#wizardcomponent)

![<Wizard> component JSX](https://github.com/rufat/payframe-masterpay/blob/master/documentation/assets/images/wizardcomponentjsx.png)

"Wizard" component requires:

*   **"heading"** - A string header title prop.
*   **"headingBold"** - A string header bold title prop. It is an optional prop.
*   **"stepItems"** - An Array<Object> which contains step item JSX components.
*   **"stepSuccess"** - A JSX container prop. This JSX will be rendered when the wizard is completed. We have included an example step called "Finalize".

![Step item array](https://github.com/rufat/payframe-masterpay/blob/master/documentation/assets/images/stepitemsarray.png)

You will need to provide **"config"** and **"component"** properties for each step array element.

**A step-item config example:**

![Step item config object](https://github.com/rufat/payframe-masterpay/blob/master/documentation/assets/images/stepconfigobject.png)

(src/constants.js)

*   **"name"** - A unique string ID for the step.
*   **"tittle"** - A title name for the step.
*   **"desc"** - A description for the step which will be under the title.
*   **"editable"** - A boolean prop that receives "true" or "false" value for allowing to edit the completed item after skipping it.

![An example step item](https://github.com/rufat/payframe-masterpay/blob/master/documentation/assets/images/examplestepitem.png)

* * *

### **C) Footer component** - [top](#footercomponent)

![Footer component](https://github.com/rufat/payframe-masterpay/blob/master/documentation/assets/images/footercomponent.png)

In the "Footer" component, you need to provide:

*   **"text"** - A string text title prop.
*   **"textUnderline"** - A string text bold title prop. It is an optional prop.
*   **"hideLogo"** - A boolean prop that receives "true" or "false" value for allowing to hide or show the footer logo. It is also optional.

* * *

### **D) CSS structure** - [top](#cssstructure)

![CSS files](https://github.com/rufat/payframe-masterpay/blob/master/documentation/assets/images/cssfiles.png)

(public/css)

*   **index.css** - Contains default stylings and imports 3 other core CSS files (skin.css, main.css, steps.css).
*   **main.css** - Container, step-item stylings, and media queries.
*   **reset.css** - Reducing browser inconsistencies in things like default line heights, margins, font sizes of headings, and etc.
*   **skin.css** - Contains reusable component theme stylings.
*   **steps.css** - You can change the ready to use step themes' styling from this stylesheet file.

**Note:** The logos are "background-image" inside of the "main.css" file.

* * *

Once again, thank you so much for purchasing this theme. As I said at the beginning, I'd be glad to help you if you have any questions relating to this React component. No guarantees, but I'll do my best to assist.

[**Rufat Mammadli**](https://twitter.com/rufatmammadli)

* * *
