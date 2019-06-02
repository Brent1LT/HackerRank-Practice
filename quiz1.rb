require 'byebug'

def prime?(num)
  return false if num < 2
  (2...num).each do |i|
    return false if num % i == 0
  end 
  true
end

# p prime?(2)  # => true
# p prime?(3)  # => true
# p prime?(7)  # => true
# p prime?(9)  # => false
# p prime?(14) # => false
# p prime?(0)  # => false
# p prime?(-7) # => false


def hash_sum(hash)
  total = 0
  hash.each {|k, v| total += v}
  total
end

# p hash_sum({"a"=>5, "b"=>2, "c"=>-1}) # => 6
# p hash_sum({true=>40, 50=>3})         # => 43
# p hash_sum({})                        # => 0

def save_last_vowels(sentence)
  words = sentence.split(' ')
  last_vowel = []
  vowels = 'aeiou'
  words.each do |word|
    reversed = word.reverse
    count = 0
    new_word = ''
    reversed.each_char do |char|
      if vowels.include?(char)
        if count == 0 
          new_word += char 
          count += 1
        else
          next
        end 
      else
        new_word += char 
      end 
    end 
    last_vowel << new_word.reverse
  end 
  last_vowel.join(" ")
end

# p save_last_vowels("proper")                       # => "prper"
# p save_last_vowels("proper tonic panther")         # => "prper tnic pnther"
# p save_last_vowels("bootcamp prep")                # => "btcamp prep"
# p save_last_vowels("towel flicker banana")         # => "twel flcker bnna"
# p save_last_vowels("runner anaconda")              # => "rnner ncnda"
# p save_last_vowels("turtle cheeseburger fries")    # => "trtle chsbrger fres"


def anti_prime?(num)
    max_divisors = find_divisors(num)
    (1...num).each do |thing|
        test_divisors = find_divisors(thing)
        return false if test_divisors.length >= max_divisors.length
    end 
    true
end

def find_divisors(num)
    divisors = []
    (1..num).each do |i|
        divisors << i if num % i == 0
    end 
    divisors
end 

# p anti_prime?(6)
# p anti_prime?(12)
# p anti_prime?(24)
# p anti_prime?(48)

# p anti_prime?(7)
# p anti_prime?(15)
# p anti_prime?(30)
# p anti_prime?(72)

# puts find_divisors(72).length