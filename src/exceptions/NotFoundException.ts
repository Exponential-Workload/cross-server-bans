/*
MIT License

Copyright (c) 2022 Expo
Certain portions of this software may be Copyright (c) 2022 expdani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import Exception from './Exception';
import FileNotFoundException from './FileNotFoundException';

/**
 * Describes something being missing, that shouldn't be.
 * @see {@link FileNotFoundException}
 * @class @exception
 */
export default class NotFoundException extends Exception {
  constructor(message:string){
    super(message);
    this.name = 'NotFoundException';
  }
  /** @alias {@link FileNotFoundException} */
  static File = FileNotFoundException; // fix jsdoc
}
