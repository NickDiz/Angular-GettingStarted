import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
}) 

export class ConvertToSpacesPipe implements PipeTransform{
    transform(inputStr: string, character : string) : string {
        return inputStr.replace(character, ' '); 
    }
}