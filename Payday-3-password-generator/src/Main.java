import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);

        System.out.println("Enter the number of digits you want to use for the password:");
        int numberOfDigits = keyboard.nextInt();
        while (numberOfDigits < 3 || numberOfDigits > 4) {
            System.out.println("The number of digits must be 3 or 4");
            numberOfDigits = keyboard.nextInt();
        }

        System.out.println("Enter the digits you want to use for the password:");
        int[] digits = new int[numberOfDigits];
        for (int i = 0; i < numberOfDigits; i++) {
            int temp = keyboard.nextInt();
            while (temp < 0 || temp > 9) {
                System.out.println("The digits must be between 0 and 9");
                temp = keyboard.nextInt();
            }
            digits[i] = temp;
            }

            List<List<Integer>> possiblePasswords = PasswordGenerator.generatePossiblePasswords(digits);
            PasswordGenerator.printPasswords(possiblePasswords);
        }


        //Case 1 : The password uses 4 digits, all must be used exactly once
        //int[] fourDgits = {0, 2, 5, 7};
        //List<List<Integer>> possiblePasswordsFourDigits = PasswordGenerator.generatePossiblePasswords(fourDgits);

        //Case 2 : The password uses 3 digits, which means exactly one digit will be used twice
        //int[] threeDigits = {4, 5, 6};
        //List<List<Integer>> possiblePasswordsThreeDigits = PasswordGenerator.generatePossiblePasswords(threeDigits);


        // Print the possible passwords for both cases
        //System.out.println("Possible passwords for four digits:");
        //PasswordGenerator.printPasswords(possiblePasswordsFourDigits);

        //System.out.println("\nPossible passwords for three digits:");
        //PasswordGenerator.printPasswords(possiblePasswordsThreeDigits);
}



