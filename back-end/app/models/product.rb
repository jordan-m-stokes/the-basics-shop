class Product < ApplicationRecord

    def format_price
        old_price = self.price.gsub ",", ""
        new_price = old_price

        if old_price.to_i == old_price.to_f
            new_price = "#{old_price.to_i}"
        else
            new_price = (old_price) ? (sprintf('%.2f', old_price)) : ('')
        end

        whole_digits = new_price
        decimal_digits = ''

        if new_price.include? '.'
            whole_digits = new_price.split('.')[0]
            decimal_digits = ".#{new_price.split('.')[1]}"
        end

        whole_digits = whole_digits.reverse
        i = 3
        

        until i >= whole_digits.size
            limit = whole_digits.size
            whole_digits = whole_digits.sub(whole_digits[i...limit], ",#{whole_digits[i...limit]}")
            i += 4
        end

        new_price = whole_digits.reverse + decimal_digits


        self.update_attribute :price, new_price
    end

end
