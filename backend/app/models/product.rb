class Product < ApplicationRecord

    def format_price
        return (self.price) ? (sprintf('%.2f', self.price)) : ('');
    end

    def format_price_u
        return (self.price) ? (sprintf('$%.2f', self.price)) : ('');
    end
end
