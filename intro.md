# React.js Training

![](images/intro.png)

As a dedicated JavaScript design and development firm, we work extensively with clients on React projects. We’ve developed this training so that now you can jump start your React projects using the best practices we’ve developed.

This book walks the reader through everything they need to know from getting started with the Angular 2 toolchain to writing applications with scalable front end architectures.


## What you'll learn

- To build a web application with ReactJS, ImmutableJS, and Redux.
- The process used to build an app using component based architecture.
- The benefits of global app-state, and leverage the power of Redux flux architecture.


## Prerequisites

Students should have the following tools installed:

### Command Line

The React toolchain is quite command-line oriented, so we suggest installing a good command-line terminal program.

For **Mac OS X**, we recommend [iTerm2](https://www.iterm2.com/downloads.html).  
For **Windows**, we recommend using [Git Bash](http://git-scm.com/download/) (also comes with git – see below).


### Git

We'll be using Git from the command line: http://git-scm.com/download/

##### Tips for Mac OS X users

If you have [homebrew](http://brew.sh/) installed, you may install Git by simply issuing: `brew install git`.

##### Tips for Windows users

- When in doubt, select the default options in the installation wizard.
- The rest of this training assumes you are using the terminal that comes with Git (Git Bash) to run all command-line examples.

_Notes: The official Git download provides several GUI tools, for both OS X and Windows. If you are proficient with these interfaces, feel free to use them. This training, however, will only provide instructions from the command-line._

### Node.js

http://nodejs.org/download/

The download above should install two commands: `node` and `npm`.

`npm` may require some extra configuration to set permissions properly on your system.

On __Mac OS X__, do the following:

```sh
npm config set prefix ~/.npm
echo 'export PATH="$PATH:~/.npm/bin"' >> ~/.bashrc
~/.bashrc
```

On __Windows__, fire up `Git Bash` and type the following:

```sh
mkdir /c/Users/$USER/AppData/Roaming/npm
echo 'export PATH="$PATH:/c/Program Files/nodejs"' >> ~/.bashrc
~/.bashrc
```
__Note:__ if you installed the 32-bit Windows version of node, the second line above should instead read:

```
echo 'export PATH="$PATH:/c/Program Files (x86)/nodejs"' >> ~/.bashrc
```

### A Code Editor

Any text editor will work. At Rangle.io, the most popular editors/IDEs are:

* [Vim](http://www.vim.org/download.php)
* [Sublime Text](http://www.sublimetext.com/)
* [Atom](https://atom.io/)
* [WebStorm](https://www.jetbrains.com/webstorm/)

### Google Chrome

https://www.google.com/chrome/browser/desktop/index.html
