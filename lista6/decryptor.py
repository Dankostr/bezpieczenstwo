#correct way to do this
#xor all messages with themselfes
#we delete key, so our only value will be letters and marks
#we can now search for key which will be our first message
import operator


class Cryptogram:
    def __init__(self, cryptogram):
        self.chars = []
        bytes = str(cryptogram).split(' ')

        for ch in bytes:
            self.chars.append(chr(int(ch, 2)))

    def get_chr(self, index):
        if index < len(self.chars):
            return self.chars[index]
        else:
            return ' '


def get_cyptograms_from_file(data_file):
    cryptograms = []
    with open(data_file, 'r') as file:
        for line in file:
            cryptograms.append(Cryptogram(line))
    return cryptograms


letters_frequency = {
    'a': 891,  'b': 147, 'c': 396,  'd': 325, 'e': 766,  'f': 30, 'g': 142, 'h': 108, 'i': 821,
    'j': 228, 'k': 351, 'l': 210,  'm': 280, 'n': 552,  'o': 775,  'p': 313, 'q': 14, 'r': 469,
    's': 432,  't': 398, 'u': 250, 'v': 4, 'w': 465, 'x': 2, 'y': 376, 'z': 564,  ' ': 1000,
    ',': 160, '.': 100, '-': 50, '"': 20, '!': 30, '?': 30, ':': 10, ';': 10, '(': 10, ')': 10
}

for i in range(65, 91):
    letters_frequency[chr(i)] = 20
for i in range(48, 58):
    letters_frequency[chr(i)] = 15

key = []
cryptograms = get_cyptograms_from_file("cryptogramy.txt")
maxLen = 0
for crypt in cryptograms:
    if len(crypt.chars) > maxLen:
        maxLen = len(crypt.chars)
for i in range(0, maxLen):
    possible_key = {}

    cryptograms_to_use = []

    for crypt in cryptograms:
        if len(crypt.chars) > i:
            cryptograms_to_use.append(crypt)
    for crypt in cryptograms_to_use:
        for char in letters_frequency.keys():
            xoredChar = (ord(crypt.get_chr(i)) ^ ord(char), letters_frequency[char])
            if xoredChar[0] not in possible_key.keys():
                possible_key[xoredChar[0]] = xoredChar[1]
            else:
                possible_key[xoredChar[0]] = possible_key.get(xoredChar[0]) + letters_frequency.get(char)

    best_match = ' '
    best_counter = 0
    possible_key = dict(sorted(possible_key.items(), key=operator.itemgetter(1), reverse=True))
    for char in possible_key.keys():
        counter = 0

        for crypt in cryptograms_to_use:
            if (chr(ord(crypt.get_chr(i)) ^ char)) in letters_frequency.keys():
                counter += 1
        if counter > best_counter:
            best_counter = counter
            best_match = char
    key.append(best_match)

for crypt in cryptograms:
    for i in range(0, len(crypt.chars)):
        print(chr(ord(crypt.get_chr(i)) ^ key[i]), end="")
    print("")
