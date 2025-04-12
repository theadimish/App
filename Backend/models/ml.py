import os
import cv2
import numpy as np

def search_image_name(query_image_path):
    processed_dir = 'processed_images'
    min_distance = float('inf')
    best_match = None

    query_img = cv2.imread(query_image_path)
    query_img = cv2.resize(query_img, (100, 100))  # normalize size

    for filename in os.listdir(processed_dir):
        if filename.endswith(('.jpg', '.jpeg', '.png')):
            compare_img = cv2.imread(os.path.join(processed_dir, filename))
            compare_img = cv2.resize(compare_img, (100, 100))
            diff = np.sum((query_img.astype("float") - compare_img.astype("float")) ** 2)
            
            if diff < min_distance:
                min_distance = diff
                best_match = filename

    # Strip hash and extension → assume filename is like pizza.jpg
    food_name = os.path.splitext(best_match)[0].replace('_', ' ').title()
    return food_name