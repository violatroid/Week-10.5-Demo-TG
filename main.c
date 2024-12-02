#include <stdio.h>

int main(int argc, char *argv[]){  //argc = argument count - how many arguments passed
        printf("Hello World!!!\n"); //argv = argument values - arrays of strings that has passed

        for(int i=0; i < argc; i++){ 
                printf("argument %d is '%s'\n", i, argv[i]); 
        }
        return -1; //success
}