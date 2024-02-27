import random
import string

random_words = '\n'.join(''.join(random.choices(string.ascii_lowercase, k=random.randint(2, 8))) for _ in range(49))
print(random_words)

