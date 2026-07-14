"""Primer paso: dibujar un círculo negro sobre un lienzo blanco."""
from PIL import Image, ImageDraw

# 1. Crear un lienzo blanco de 400x200 píxeles (más ancho para dos figuras).
img = Image.new('RGB', (400, 200), 'white')

# 2. Obtener el "pincel" para dibujar sobre esa imagen.
draw = ImageDraw.Draw(img)

# 3. Dibujar el círculo en el lado izquierdo.
draw.ellipse([50, 50, 150, 150], outline='black', width=3)

# 4. Dibujar el cuadrado en el lado derecho.
draw.rectangle([250, 50, 350, 150], outline='black', width=3)

draw.polygon([(x1, y1), (x2, y2), (x3, y3)], outline='black', width=3)

# 5. Guardar la imagen a disco.
img.save('output/hola.png')

print("Imagen guardada en output/hola.png")
